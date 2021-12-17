// Vue
import { ref } from '@vue/composition-api';

// Gsap
import gsap from 'gsap';

// Vendor
import ResourceLoader from "@/vendor/loaders/ResourceLoader";
import ThreeGLTFLoader from "@/vendor/loaders/loaders/three-gltf-loader";
import ImageLoader from "@/vendor/loaders/loaders/image-loader";

// Utils
import bindAll from "@/utils/bindAll";

// Resources
import globalResources from '@/static/datas/globalResources';

export default {
    name: "Preloader",
    // beforeCreate() {
    //     this.$store.commit('increment', 1);
    //     console.log(this.$store.state.counter);
    // },
    setup() {
        const preloader = ref(null);
        const preloaderValue = ref(0);


        // const handleClick = () => {
        //     gsap.to(preloader.value, {
        //         innerText: 500,
        //         snap: "innerText",
        //         duration: 5,
        //         ease: "expo.out"
        //     });
        // }
        // onMounted(() => {
        //     this.registerLoaders();
        //     this.setupResourceLoader();
        //     // this.setupEventListeners();
        //     // this.loadResources();
        // })
        console.log(this)

        // this.registerLoaders();
        // this.setupResourceLoader();
        // this.setupEventListeners();
        // this.loadResources();
        

        const registerLoaders = () => {
            // ResourceLoader.registerLoader({ loader: ThreeGLTFLoader, type: "gltf" });
            // ResourceLoader.registerLoader({ loader: ImageLoader, type: "jpg" });
        }

        const setupResourceLoader = () => {
            this._resourceLoader = new ResourceLoader();
            console.log(this._resourceLoader.getLoaders())

            // this._resourceLoader.add({
            //     resources: globalResources,
            //     preload: true
            // });
        }

        const loadResources = () => {
            this._resourceLoader.preload();
        }

        const setupEventListeners = () => {
            this._resourceLoader.addEventListener('complete', this.loadResourcesCompleteHandler);
            this._resourceLoader.addEventListener('progress', this.loadResourcesProgressHandler);
        }

        const loadResourcesCompleteHandler = (e) => {
            // console.log("loaded");
            console.log(e);
            // this.datas = e;
            // this.loaderUI.toggleLoader();
    
            // console.log(this._resourceLoader.get('Duck'))
        }
    
        const loadResourcesProgressHandler = (e) => {
            this.loaderUI.setLoaderProgress(Math.round(e * 100));
        }

        return {
            preloader,
            preloaderValue,
            // handleClick
        }
    },
    methods: {
        registerLoaders() {
            // ResourceLoader.registerLoader({ loader: ThreeGLTFLoader, type: "gltf" });
            // ResourceLoader.registerLoader({ loader: ImageLoader, type: "jpg" });
        },

        setupResourceLoader() {
            this._resourceLoader = new ResourceLoader();
            console.log(this._resourceLoader.getLoaders())

            // this._resourceLoader.add({
            //     resources: globalResources,
            //     preload: true
            // });
        },

        loadResources() {
            this._resourceLoader.preload();
        },

        setupEventListeners() {
            this._resourceLoader.addEventListener('complete', this.loadResourcesCompleteHandler);
            this._resourceLoader.addEventListener('progress', this.loadResourcesProgressHandler);
        },
    
        loadResourcesCompleteHandler(e) {
            // console.log("loaded");
            console.log(e);
            // this.datas = e;
            // this.loaderUI.toggleLoader();
    
            // console.log(this._resourceLoader.get('Duck'))
        },
    
        loadResourcesProgressHandler(e) {
            this.loaderUI.setLoaderProgress(Math.round(e * 100));
        }
    }
}