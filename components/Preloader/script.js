// Vue
import { ref, onMounted } from '@vue/composition-api';

// VueX Store
// import { useStore } from 'vuex';

// Gsap
import { gsap } from 'gsap';

// Vendor
import ResourceLoader from "@/vendor/loaders/ResourceLoader";
import ThreeGLTFLoader from "@/vendor/loaders/loaders/three-gltf-loader";
import ImageLoader from "@/vendor/loaders/loaders/image-loader";

// Resources
import globalResources from '@/static/datas/globalResources';

export default {
    name: "Preloader",
    setup() {
        // const store = useStore();

        const loading = ref(null);

        const loadingActive = ref(true);

        const resourceLoader = new ResourceLoader();

        const registerLoaders = () => {
            ResourceLoader.registerLoader({ Loader: ThreeGLTFLoader, type: "gltf" });
            ResourceLoader.registerLoader({ Loader: ImageLoader, type: "jpg" });
        };

        const setupResourceLoader = () => {
            resourceLoader.add({
                resources: globalResources,
                preload: true
            });
        };

        const loadResources = () => {
            resourceLoader.preload();
        };

        const setupEventListeners = () => {
            resourceLoader.addEventListener('start', loadResourcesStartHandler);
            resourceLoader.addEventListener('complete', loadResourcesCompleteHandler);
            resourceLoader.addEventListener('progress', loadResourcesProgressHandler);
        };

        const loadResourcesStartHandler = (e) => {
            // store.dispatch('preloader/setLoadingStarted');
        }

        const loadResourcesCompleteHandler = (e) => {
            loadingActive.value = false;
            // store.dispatch('preloader/setLoadingCompleted');
        }
    
        const loadResourcesProgressHandler = (e) => {
            gsap.to(loading.value, {
                innerText: `${e} %`,
                snap: "innerText",
                duration: 1,
                ease: "expo.out"
            });
        }

        onMounted(() => {
            registerLoaders();
            setupResourceLoader();
            setupEventListeners();
            loadResources();
        })

        return {
            loading,
            loadingActive
        }
    }
}