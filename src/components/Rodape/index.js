import './index.scss';
import '../../css/global.css';

import logoDevWearSemFundo from '../../assets/image/logoDevWearSemFundo.svg';

export default function Rodape() {
    return (
        <section className='Comp-Rodape-Estilo'>
            <footer>
                <section class="conteudoFooter">
                    <div class="conteudo1">
                        <h3>IDIOMA</h3>
                        <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="34" height="18" rx="9" stroke="white" stroke-width="2" />
                            <path
                                d="M51.26 5.192C51.26 4.964 51.338 4.778 51.494 4.634C51.662 4.478 51.872 4.4 52.124 4.4H57.38C58.172 4.4 58.874 4.568 59.486 4.904C60.098 5.228 60.572 5.69 60.908 6.29C61.244 6.878 61.412 7.556 61.412 8.324C61.412 9.116 61.244 9.812 60.908 10.412C60.584 11.012 60.116 11.474 59.504 11.798C58.892 12.122 58.184 12.284 57.38 12.284H52.952V15.758C52.952 16.214 52.808 16.562 52.52 16.802C52.232 17.042 51.812 17.162 51.26 17.162V5.192ZM57.38 10.79C58.1 10.79 58.67 10.574 59.09 10.142C59.51 9.698 59.72 9.092 59.72 8.324C59.72 7.58 59.504 6.992 59.072 6.56C58.652 6.116 58.088 5.894 57.38 5.894H52.952V10.79H57.38ZM65.5433 17.162C64.8113 17.162 64.1453 17.024 63.5453 16.748C62.9573 16.472 62.4953 16.1 62.1593 15.632C61.8353 15.152 61.6733 14.618 61.6733 14.03V11.078C61.6733 10.478 61.8353 9.932 62.1593 9.44C62.4953 8.948 62.9573 8.558 63.5453 8.27C64.1333 7.982 64.7993 7.838 65.5433 7.838C66.2873 7.838 66.9533 7.982 67.5413 8.27C68.1413 8.558 68.6033 8.948 68.9273 9.44C69.2633 9.932 69.4313 10.478 69.4313 11.078V14.03C69.4313 14.618 69.2633 15.152 68.9273 15.632C68.5913 16.1 68.1293 16.472 67.5413 16.748C66.9533 17.024 66.2873 17.162 65.5433 17.162ZM65.5433 15.812C66.2633 15.812 66.8333 15.644 67.2533 15.308C67.6853 14.96 67.9013 14.51 67.9013 13.958V11.132C67.9013 10.556 67.6853 10.088 67.2533 9.728C66.8333 9.368 66.2633 9.188 65.5433 9.188C64.8353 9.188 64.2653 9.368 63.8333 9.728C63.4013 10.088 63.1853 10.556 63.1853 11.132V13.958C63.1853 14.51 63.3953 14.96 63.8153 15.308C64.2473 15.644 64.8233 15.812 65.5433 15.812ZM75.416 9.224C74.744 9.224 74.186 9.428 73.742 9.836C73.298 10.232 73.076 10.718 73.076 11.294V16.01C73.076 16.406 72.944 16.7 72.68 16.892C72.428 17.072 72.038 17.162 71.51 17.162V9.17C71.51 8.282 72.014 7.838 73.022 7.838V8.936C72.83 9.14 72.698 9.32 72.626 9.476L72.698 9.548C73.466 8.408 74.426 7.838 75.578 7.838C76.01 7.838 76.34 7.946 76.568 8.162C76.796 8.366 76.91 8.618 76.91 8.918C76.91 9.134 76.856 9.326 76.748 9.494C76.412 9.314 75.968 9.224 75.416 9.224ZM81.9299 17.162C81.0779 17.162 80.4419 16.922 80.0219 16.442C79.6019 15.95 79.3919 15.308 79.3919 14.516V9.26H77.7179C77.7179 8.852 77.8079 8.54 77.9879 8.324C78.1679 8.108 78.4139 8 78.7259 8H79.4099V6.29C79.4099 5.894 79.5359 5.606 79.7879 5.426C80.0519 5.234 80.4419 5.138 80.9579 5.138V8H83.3519C83.3519 8.84 82.9739 9.26 82.2179 9.26H80.9759V14.462C80.9759 14.942 81.0599 15.284 81.2279 15.488C81.4079 15.68 81.7259 15.776 82.1819 15.776C82.6019 15.776 82.9979 15.668 83.3699 15.452C83.5259 15.608 83.6039 15.818 83.6039 16.082C83.6039 16.37 83.4539 16.622 83.1539 16.838C82.8539 17.054 82.4459 17.162 81.9299 17.162ZM92.9542 15.83C92.9542 16.718 92.4502 17.162 91.4422 17.162V16.01C91.5502 15.902 91.6762 15.74 91.8202 15.524L91.7482 15.452C91.3882 15.968 90.9322 16.382 90.3802 16.694C89.8402 17.006 89.2462 17.162 88.5982 17.162C87.9502 17.162 87.3742 17.024 86.8702 16.748C86.3782 16.472 85.9942 16.088 85.7182 15.596C85.4542 15.104 85.3222 14.552 85.3222 13.94V8.99C85.3222 8.594 85.4542 8.306 85.7182 8.126C85.9822 7.934 86.3782 7.838 86.9062 7.838V13.868C86.9062 14.444 87.0742 14.906 87.4102 15.254C87.7582 15.602 88.2682 15.776 88.9402 15.776C89.3842 15.776 89.7922 15.686 90.1642 15.506C90.5362 15.314 90.8302 15.062 91.0462 14.75C91.2742 14.426 91.3882 14.078 91.3882 13.706V8.99C91.3882 8.594 91.5142 8.306 91.7662 8.126C92.0302 7.934 92.4262 7.838 92.9542 7.838V15.83ZM99.051 20.762C98.427 20.762 97.845 20.66 97.305 20.456C96.765 20.252 96.339 19.976 96.027 19.628C95.715 19.292 95.559 18.926 95.559 18.53C95.559 18.218 95.661 17.99 95.865 17.846C96.081 17.702 96.369 17.63 96.729 17.63C96.753 18.194 96.969 18.638 97.377 18.962C97.797 19.298 98.355 19.466 99.051 19.466C100.587 19.466 101.355 18.722 101.355 17.234V16.19C101.523 16.046 101.649 15.914 101.733 15.794L101.679 15.704C101.331 16.076 100.893 16.382 100.365 16.622C99.849 16.862 99.327 16.982 98.799 16.982C97.767 16.982 96.921 16.7 96.261 16.136C95.613 15.56 95.289 14.804 95.289 13.868V10.97C95.289 10.358 95.439 9.818 95.739 9.35C96.051 8.87 96.471 8.498 96.999 8.234C97.539 7.97 98.133 7.838 98.781 7.838C99.957 7.838 100.941 8.354 101.733 9.386L101.805 9.314L101.445 8.864C101.445 8.528 101.559 8.276 101.787 8.108C102.027 7.928 102.411 7.838 102.939 7.838V17.072C102.939 17.792 102.771 18.428 102.435 18.98C102.111 19.544 101.655 19.982 101.067 20.294C100.479 20.606 99.807 20.762 99.051 20.762ZM99.087 15.614C99.723 15.614 100.263 15.446 100.707 15.11C101.151 14.762 101.373 14.354 101.373 13.886V10.952C101.373 10.46 101.151 10.046 100.707 9.71C100.275 9.374 99.747 9.206 99.123 9.206C98.403 9.206 97.845 9.368 97.449 9.692C97.053 10.004 96.855 10.454 96.855 11.042V13.796C96.855 14.36 97.047 14.804 97.431 15.128C97.827 15.452 98.379 15.614 99.087 15.614ZM112.905 15.83C112.905 16.718 112.401 17.162 111.393 17.162V16.01C111.501 15.902 111.627 15.74 111.771 15.524L111.699 15.452C111.339 15.968 110.883 16.382 110.331 16.694C109.791 17.006 109.197 17.162 108.549 17.162C107.901 17.162 107.325 17.024 106.821 16.748C106.329 16.472 105.945 16.088 105.669 15.596C105.405 15.104 105.273 14.552 105.273 13.94V8.99C105.273 8.594 105.405 8.306 105.669 8.126C105.933 7.934 106.329 7.838 106.857 7.838V13.868C106.857 14.444 107.025 14.906 107.361 15.254C107.709 15.602 108.219 15.776 108.891 15.776C109.335 15.776 109.743 15.686 110.115 15.506C110.487 15.314 110.781 15.062 110.997 14.75C111.225 14.426 111.339 14.078 111.339 13.706V8.99C111.339 8.594 111.465 8.306 111.717 8.126C111.981 7.934 112.377 7.838 112.905 7.838V15.83ZM119.038 17.162C118.306 17.162 117.652 17.024 117.076 16.748C116.5 16.46 116.05 16.07 115.726 15.578C115.402 15.074 115.24 14.51 115.24 13.886V11.222C115.24 10.586 115.408 10.01 115.744 9.494C116.092 8.978 116.554 8.576 117.13 8.288C117.718 7.988 118.354 7.838 119.038 7.838C119.722 7.838 120.346 7.982 120.91 8.27C121.486 8.558 121.936 8.954 122.26 9.458C122.596 9.962 122.764 10.532 122.764 11.168V12.32C122.764 12.512 122.692 12.674 122.548 12.806C122.404 12.938 122.23 13.004 122.026 13.004H116.77V13.814C116.77 14.426 116.962 14.918 117.346 15.29C117.742 15.662 118.306 15.848 119.038 15.848C119.77 15.848 120.328 15.686 120.712 15.362C121.096 15.038 121.288 14.6 121.288 14.048C121.648 14.024 121.948 14.096 122.188 14.264C122.44 14.42 122.566 14.654 122.566 14.966C122.566 15.35 122.398 15.71 122.062 16.046C121.738 16.382 121.306 16.652 120.766 16.856C120.226 17.06 119.65 17.162 119.038 17.162ZM121.306 11.78V11.168C121.306 10.568 121.096 10.082 120.676 9.71C120.268 9.326 119.722 9.134 119.038 9.134C118.354 9.134 117.802 9.326 117.382 9.71C116.974 10.082 116.77 10.568 116.77 11.168V11.78H121.306ZM117.688 6.542C117.604 6.638 117.496 6.716 117.364 6.776C117.232 6.824 117.094 6.848 116.95 6.848C116.758 6.848 116.578 6.812 116.41 6.74C116.254 6.656 116.122 6.542 116.014 6.398L118.552 3.752C118.684 3.596 118.858 3.518 119.074 3.518C119.29 3.518 119.464 3.596 119.596 3.752L122.134 6.398C122.026 6.542 121.888 6.656 121.72 6.74C121.564 6.812 121.39 6.848 121.198 6.848C121.054 6.848 120.916 6.824 120.784 6.776C120.652 6.716 120.544 6.638 120.46 6.542L119.074 4.886L117.688 6.542ZM128.1 17.162C127.488 17.162 126.912 17.072 126.372 16.892C125.832 16.7 125.394 16.43 125.058 16.082C124.734 15.734 124.572 15.326 124.572 14.858C124.572 14.282 124.92 13.97 125.616 13.922C125.736 14.594 126.018 15.092 126.462 15.416C126.918 15.728 127.494 15.884 128.19 15.884C128.886 15.884 129.426 15.782 129.81 15.578C130.194 15.374 130.386 15.062 130.386 14.642C130.386 14.342 130.308 14.102 130.152 13.922C129.996 13.73 129.744 13.568 129.396 13.436C129.06 13.292 128.574 13.154 127.938 13.022C127.146 12.842 126.516 12.65 126.048 12.446C125.58 12.242 125.22 11.972 124.968 11.636C124.728 11.3 124.608 10.856 124.608 10.304C124.608 9.836 124.752 9.416 125.04 9.044C125.328 8.66 125.724 8.366 126.228 8.162C126.744 7.946 127.326 7.838 127.974 7.838C128.574 7.838 129.138 7.922 129.666 8.09C130.206 8.258 130.638 8.498 130.962 8.81C131.298 9.122 131.466 9.482 131.466 9.89C131.466 10.166 131.358 10.388 131.142 10.556C130.926 10.712 130.626 10.802 130.242 10.826C130.206 10.298 129.99 9.884 129.594 9.584C129.21 9.272 128.67 9.116 127.974 9.116C127.398 9.116 126.942 9.224 126.606 9.44C126.27 9.656 126.102 9.944 126.102 10.304C126.102 10.688 126.258 10.976 126.57 11.168C126.894 11.348 127.44 11.522 128.208 11.69C129.468 11.942 130.392 12.29 130.98 12.734C131.58 13.166 131.88 13.784 131.88 14.588C131.88 15.404 131.55 16.04 130.89 16.496C130.23 16.94 129.3 17.162 128.1 17.162ZM138.138 12.464C138.138 12.02 138.246 11.672 138.462 11.42C138.678 11.168 138.984 11.042 139.38 11.042H144.69C144.69 11.486 144.582 11.834 144.366 12.086C144.15 12.338 143.838 12.464 143.43 12.464H138.138ZM152.267 17C152.027 17 151.823 16.922 151.655 16.766C151.487 16.61 151.403 16.424 151.403 16.208V5.192C151.403 4.964 151.487 4.778 151.655 4.634C151.823 4.478 152.027 4.4 152.267 4.4H157.271C158.315 4.4 159.143 4.712 159.755 5.336C160.379 5.96 160.691 6.8 160.691 7.856C160.691 8.42 160.541 8.948 160.241 9.44C159.941 9.932 159.551 10.298 159.071 10.538V10.574C159.755 10.778 160.283 11.132 160.655 11.636C161.027 12.128 161.213 12.728 161.213 13.436C161.213 14.132 161.063 14.75 160.763 15.29C160.475 15.83 160.067 16.25 159.539 16.55C159.011 16.85 158.405 17 157.721 17H152.267ZM157.235 9.962C157.727 9.962 158.147 9.764 158.495 9.368C158.855 8.96 159.035 8.468 159.035 7.892C159.035 7.256 158.873 6.758 158.549 6.398C158.237 6.038 157.799 5.858 157.235 5.858H153.077V9.962H157.235ZM157.595 15.542C158.207 15.542 158.687 15.362 159.035 15.002C159.383 14.63 159.557 14.114 159.557 13.454C159.557 12.818 159.383 12.32 159.035 11.96C158.699 11.6 158.219 11.42 157.595 11.42H153.077V15.542H157.595ZM167.191 9.224C166.519 9.224 165.961 9.428 165.517 9.836C165.073 10.232 164.851 10.718 164.851 11.294V16.01C164.851 16.406 164.719 16.7 164.455 16.892C164.203 17.072 163.813 17.162 163.285 17.162V9.17C163.285 8.282 163.789 7.838 164.797 7.838V8.936C164.605 9.14 164.473 9.32 164.401 9.476L164.473 9.548C165.241 8.408 166.201 7.838 167.353 7.838C167.785 7.838 168.115 7.946 168.343 8.162C168.571 8.366 168.685 8.618 168.685 8.918C168.685 9.134 168.631 9.326 168.523 9.494C168.187 9.314 167.743 9.224 167.191 9.224ZM172.76 17.162C171.728 17.162 170.894 16.886 170.258 16.334C169.634 15.782 169.322 15.056 169.322 14.156C169.322 13.244 169.652 12.512 170.312 11.96C170.972 11.396 171.842 11.114 172.922 11.114C174.074 11.114 175.022 11.522 175.766 12.338L175.838 12.266C175.706 12.122 175.556 11.972 175.388 11.816V11.06C175.388 10.448 175.196 9.974 174.812 9.638C174.428 9.302 173.882 9.134 173.174 9.134C171.914 9.134 171.014 9.632 170.474 10.628C170.282 10.532 170.12 10.406 169.988 10.25C169.868 10.082 169.808 9.914 169.808 9.746C169.808 9.422 169.97 9.116 170.294 8.828C170.618 8.528 171.044 8.288 171.572 8.108C172.112 7.928 172.676 7.838 173.264 7.838C174.404 7.838 175.298 8.12 175.946 8.684C176.606 9.248 176.936 10.028 176.936 11.024V15.956C176.936 16.376 176.816 16.682 176.576 16.874C176.336 17.066 175.958 17.162 175.442 17.162V16.316C175.694 16.052 175.832 15.896 175.856 15.848L175.784 15.776C175.004 16.7 173.996 17.162 172.76 17.162ZM173.03 15.92C173.774 15.92 174.356 15.764 174.776 15.452C175.208 15.14 175.424 14.708 175.424 14.156C175.424 13.604 175.214 13.166 174.794 12.842C174.374 12.518 173.798 12.356 173.066 12.356C172.382 12.356 171.842 12.518 171.446 12.842C171.062 13.154 170.87 13.592 170.87 14.156C170.87 14.72 171.056 15.158 171.428 15.47C171.812 15.77 172.346 15.92 173.03 15.92ZM182.364 17.162C181.752 17.162 181.176 17.072 180.636 16.892C180.096 16.7 179.658 16.43 179.322 16.082C178.998 15.734 178.836 15.326 178.836 14.858C178.836 14.282 179.184 13.97 179.88 13.922C180 14.594 180.282 15.092 180.726 15.416C181.182 15.728 181.758 15.884 182.454 15.884C183.15 15.884 183.69 15.782 184.074 15.578C184.458 15.374 184.65 15.062 184.65 14.642C184.65 14.342 184.572 14.102 184.416 13.922C184.26 13.73 184.008 13.568 183.66 13.436C183.324 13.292 182.838 13.154 182.202 13.022C181.41 12.842 180.78 12.65 180.312 12.446C179.844 12.242 179.484 11.972 179.232 11.636C178.992 11.3 178.872 10.856 178.872 10.304C178.872 9.836 179.016 9.416 179.304 9.044C179.592 8.66 179.988 8.366 180.492 8.162C181.008 7.946 181.59 7.838 182.238 7.838C182.838 7.838 183.402 7.922 183.93 8.09C184.47 8.258 184.902 8.498 185.226 8.81C185.562 9.122 185.73 9.482 185.73 9.89C185.73 10.166 185.622 10.388 185.406 10.556C185.19 10.712 184.89 10.802 184.506 10.826C184.47 10.298 184.254 9.884 183.858 9.584C183.474 9.272 182.934 9.116 182.238 9.116C181.662 9.116 181.206 9.224 180.87 9.44C180.534 9.656 180.366 9.944 180.366 10.304C180.366 10.688 180.522 10.976 180.834 11.168C181.158 11.348 181.704 11.522 182.472 11.69C183.732 11.942 184.656 12.29 185.244 12.734C185.844 13.166 186.144 13.784 186.144 14.588C186.144 15.404 185.814 16.04 185.154 16.496C184.494 16.94 183.564 17.162 182.364 17.162ZM189.399 6.488C189.063 6.488 188.781 6.38 188.553 6.164C188.325 5.948 188.211 5.678 188.211 5.354C188.211 5.03 188.325 4.766 188.553 4.562C188.781 4.346 189.063 4.238 189.399 4.238C189.723 4.238 189.999 4.346 190.227 4.562C190.455 4.766 190.569 5.03 190.569 5.354C190.569 5.678 190.455 5.948 190.227 6.164C189.999 6.38 189.723 6.488 189.399 6.488ZM188.607 8.99C188.607 8.594 188.733 8.306 188.985 8.126C189.249 7.934 189.645 7.838 190.173 7.838V16.01C190.173 16.406 190.041 16.7 189.777 16.892C189.525 17.072 189.135 17.162 188.607 17.162V8.99ZM195.708 17.162C194.832 17.162 194.178 16.922 193.746 16.442C193.314 15.95 193.098 15.308 193.098 14.516V5.39C193.098 4.994 193.224 4.706 193.476 4.526C193.74 4.334 194.136 4.238 194.664 4.238V14.462C194.664 14.93 194.76 15.266 194.952 15.47C195.144 15.674 195.462 15.776 195.906 15.776C196.35 15.776 196.758 15.668 197.13 15.452C197.286 15.632 197.364 15.842 197.364 16.082C197.364 16.37 197.214 16.622 196.914 16.838C196.614 17.054 196.212 17.162 195.708 17.162Z"
                                fill="white" />
                            <path
                                d="M17.5 3L7 10L17.5 17L28 10L17.5 3ZM17.5 5.45455C18.68 5.45455 19.8116 5.93344 20.646 6.78588C21.4804 7.63832 21.9492 8.79447 21.9492 10C21.9491 10.152 21.9416 10.3039 21.9267 10.4552C19.7857 8.81096 17.0101 7.83964 14.4115 7.89114C14.1164 7.89705 13.8239 7.91686 13.5346 7.94959C13.9054 7.20003 14.4723 6.57009 15.1722 6.12967C15.8722 5.68924 16.6779 5.45556 17.5 5.45455ZM14.5828 8.715C17.0561 8.72105 19.7617 9.71768 21.7479 11.3504C21.466 12.2762 20.9017 13.0856 20.1374 13.6605C19.3732 14.2353 18.449 14.5454 17.5 14.5455C16.32 14.5455 15.1884 14.0666 14.354 13.2141C13.5196 12.3617 13.0508 11.2055 13.0508 10C13.0526 9.60156 13.1056 9.20509 13.2086 8.82077C13.654 8.74836 14.1142 8.71386 14.5828 8.715Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="conteudo2">
                        <h3>CERTIFICACOES</h3>
                    </div>
                    <div class="conteudo3">
                        <h3>INSTITUCIONAL</h3>
                        <button>Atendimento</button>
                        <button>Compra Segura</button>
                        <button>Compra Segura</button>
                        <button>Compra Segura</button>
                        <button>Compra Segura</button>
                        <button>Politicas de Trocas e Devolucoes</button>
                        <button>Politicas de Privacidade</button>
                        <button>Avaliacoes</button>
                    </div>
                    <div class="conteudo4">
                        <h3>CONTATO</h3>
                        <svg width="214" height="24" viewBox="0 0 214 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M62 12.0301C62 5.38947 56.624 0 50 0C43.376 0 38 5.38947 38 12.0301C38 17.8526 42.128 22.7008 47.6 23.8195V15.6391H45.2V12.0301H47.6V9.02256C47.6 6.70075 49.484 4.81203 51.8 4.81203H54.8V8.42105H52.4C51.74 8.42105 51.2 8.96241 51.2 9.62406V12.0301H54.8V15.6391H51.2V24C57.26 23.3985 62 18.2737 62 12.0301Z"
                                fill="white" />
                            <path
                                d="M85.6 15.1429L91.828 11.5L85.6 7.85714V15.1429ZM99.472 5.635C99.628 6.20571 99.736 6.97071 99.808 7.94214C99.892 8.91357 99.928 9.75143 99.928 10.48L100 11.5C100 14.1593 99.808 16.1143 99.472 17.365C99.172 18.4579 98.476 19.1621 97.396 19.4657C96.832 19.6236 95.8 19.7329 94.216 19.8057C92.656 19.8907 91.228 19.9271 89.908 19.9271L88 20C82.972 20 79.84 19.8057 78.604 19.4657C77.524 19.1621 76.828 18.4579 76.528 17.365C76.372 16.7943 76.264 16.0293 76.192 15.0579C76.108 14.0864 76.072 13.2486 76.072 12.52L76 11.5C76 8.84071 76.192 6.88571 76.528 5.635C76.828 4.54214 77.524 3.83786 78.604 3.53429C79.168 3.37643 80.2 3.26714 81.784 3.19429C83.344 3.10929 84.772 3.07286 86.092 3.07286L88 3C93.028 3 96.16 3.19429 97.396 3.53429C98.476 3.83786 99.172 4.54214 99.472 5.635Z"
                                fill="white" />
                            <path
                                d="M120.96 0H131.04C134.88 0 138 3.12 138 6.96V17.04C138 18.8859 137.267 20.6562 135.961 21.9615C134.656 23.2667 132.886 24 131.04 24H120.96C117.12 24 114 20.88 114 17.04V6.96C114 5.11409 114.733 3.34379 116.039 2.03854C117.344 0.733284 119.114 0 120.96 0ZM120.72 2.4C119.574 2.4 118.475 2.85514 117.665 3.6653C116.855 4.47546 116.4 5.57427 116.4 6.72V17.28C116.4 19.668 118.332 21.6 120.72 21.6H131.28C132.426 21.6 133.525 21.1449 134.335 20.3347C135.145 19.5245 135.6 18.4257 135.6 17.28V6.72C135.6 4.332 133.668 2.4 131.28 2.4H120.72ZM132.3 4.2C132.698 4.2 133.079 4.35804 133.361 4.63934C133.642 4.92064 133.8 5.30218 133.8 5.7C133.8 6.09783 133.642 6.47936 133.361 6.76066C133.079 7.04197 132.698 7.2 132.3 7.2C131.902 7.2 131.521 7.04197 131.239 6.76066C130.958 6.47936 130.8 6.09783 130.8 5.7C130.8 5.30218 130.958 4.92064 131.239 4.63934C131.521 4.35804 131.902 4.2 132.3 4.2ZM126 6C127.591 6 129.117 6.63214 130.243 7.75736C131.368 8.88258 132 10.4087 132 12C132 13.5913 131.368 15.1174 130.243 16.2426C129.117 17.3679 127.591 18 126 18C124.409 18 122.883 17.3679 121.757 16.2426C120.632 15.1174 120 13.5913 120 12C120 10.4087 120.632 8.88258 121.757 7.75736C122.883 6.63214 124.409 6 126 6ZM126 8.4C125.045 8.4 124.13 8.77928 123.454 9.45442C122.779 10.1295 122.4 11.0452 122.4 12C122.4 12.9548 122.779 13.8705 123.454 14.5456C124.13 15.2207 125.045 15.6 126 15.6C126.955 15.6 127.87 15.2207 128.546 14.5456C129.221 13.8705 129.6 12.9548 129.6 12C129.6 11.0452 129.221 10.1295 128.546 9.45442C127.87 8.77928 126.955 8.4 126 8.4Z"
                                fill="white" />
                            <path
                                d="M160.448 23.448C161.6 23.796 162.764 24 164 24C167.183 24 170.235 22.7357 172.485 20.4853C174.736 18.2348 176 15.1826 176 12C176 10.4241 175.69 8.86371 175.087 7.4078C174.483 5.95189 173.6 4.62902 172.485 3.51472C171.371 2.40042 170.048 1.5165 168.592 0.913446C167.136 0.310389 165.576 0 164 0C162.424 0 160.864 0.310389 159.408 0.913446C157.952 1.5165 156.629 2.40042 155.515 3.51472C153.264 5.76516 152 8.8174 152 12C152 17.1 155.204 21.48 159.728 23.208C159.62 22.272 159.512 20.724 159.728 19.656L161.108 13.728C161.108 13.728 160.76 13.032 160.76 11.928C160.76 10.272 161.792 9.036 162.968 9.036C164 9.036 164.48 9.792 164.48 10.764C164.48 11.796 163.796 13.272 163.448 14.688C163.244 15.864 164.072 16.896 165.272 16.896C167.408 16.896 169.064 14.616 169.064 11.4C169.064 8.52 167 6.552 164.036 6.552C160.652 6.552 158.66 9.072 158.66 11.724C158.66 12.756 158.996 13.8 159.548 14.484C159.656 14.556 159.656 14.652 159.62 14.832L159.272 16.14C159.272 16.344 159.14 16.416 158.936 16.272C157.4 15.6 156.512 13.416 156.512 11.652C156.512 7.86 159.2 4.416 164.384 4.416C168.512 4.416 171.728 7.38 171.728 11.316C171.728 15.444 169.172 18.756 165.512 18.756C164.348 18.756 163.208 18.132 162.8 17.4L161.996 20.244C161.72 21.276 160.964 22.656 160.448 23.484V23.448Z"
                                fill="white" />
                            <path
                                d="M210.503 3.49206C209.397 2.38078 208.08 1.49967 206.628 0.90013C205.177 0.300592 203.62 -0.00537612 202.048 7.14833e-05C195.463 7.14833e-05 190.096 5.34005 190.096 11.892C190.096 13.992 190.651 16.032 191.688 17.832L190 24L196.332 22.344C198.08 23.292 200.046 23.796 202.048 23.796C208.633 23.796 214 18.456 214 11.904C214 8.72405 212.758 5.73605 210.503 3.49206ZM202.048 21.78C200.263 21.78 198.515 21.3 196.983 20.4L196.621 20.184L192.858 21.168L193.859 17.52L193.618 17.148C192.626 15.5724 192.1 13.7511 192.098 11.892C192.098 6.44405 196.561 2.00407 202.036 2.00407C204.689 2.00407 207.186 3.03606 209.055 4.90806C209.981 5.82481 210.714 6.91525 211.213 8.11616C211.712 9.31707 211.967 10.6046 211.962 11.904C211.986 17.352 207.524 21.78 202.048 21.78ZM207.499 14.388C207.198 14.244 205.727 13.524 205.461 13.416C205.184 13.32 204.991 13.272 204.786 13.56C204.581 13.86 204.014 14.532 203.845 14.724C203.676 14.928 203.495 14.952 203.194 14.796C202.892 14.652 201.928 14.328 200.794 13.32C199.902 12.528 199.311 11.556 199.13 11.256C198.961 10.956 199.106 10.8 199.262 10.644C199.395 10.512 199.564 10.296 199.709 10.128C199.853 9.96004 199.914 9.82804 200.01 9.63604C200.107 9.43204 200.058 9.26404 199.986 9.12004C199.914 8.97605 199.311 7.51205 199.069 6.91205C198.828 6.33605 198.575 6.40805 198.394 6.39605H197.815C197.61 6.39605 197.296 6.46805 197.019 6.76805C196.754 7.06805 195.982 7.78805 195.982 9.25204C195.982 10.716 197.055 12.132 197.2 12.324C197.345 12.528 199.311 15.528 202.302 16.812C203.013 17.124 203.568 17.304 204.002 17.436C204.714 17.664 205.365 17.628 205.883 17.556C206.462 17.472 207.656 16.836 207.897 16.14C208.151 15.444 208.151 14.856 208.066 14.724C207.982 14.592 207.801 14.532 207.499 14.388Z"
                                fill="white" />
                            <path
                                d="M18.9014 1H22.5816L14.5415 10.319L24 23H16.593L10.7924 15.309L4.15519 23H0.472813L9.07245 13.0323L0 1H7.59282L12.836 8.02985L18.8992 1H18.9014ZM17.6098 20.7662H19.649L6.48589 3.11651H4.29759L17.6098 20.7662Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="conteudo5">
                        <h3>FORMAS DE PAGAMENTO</h3>
                    </div>
                </section>
                <div class="rodape">
                    <div class="logo">
                        <img src={logoDevWearSemFundo}
                            alt="Logo do e-commerce da loja de roupa"></img>
                    </div>
                    <div class="informacoesEmpre">
                        <p>Endereco: Rua Linda, 299, Jd. Bonito, São Paulo, SP , CEP: 25679-485</p><br></br><p>CNPJ: 87.192.227/0001-64</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}