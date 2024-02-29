function usePageTitle(title) {
    if (!title) {
        window.document.title = "Kyle Chi"
    } else {
        window.document.title = `Kyle Chi · ${title}`
    }
}

export default usePageTitle