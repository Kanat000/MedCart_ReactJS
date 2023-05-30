import loadingStyle from './style/loading.module.css'

function LoadingPage() {
    return (
        <div className={loadingStyle.container}>
            <div class={loadingStyle.loader}>
            </div>
        </div>
    )
}

export default LoadingPage