export default new class AppEvents {
  private isSidebarOpen = false
  private sidebarToggler = document.querySelector('#sidebar-toggle') as HTMLAnchorElement
  private sidebar = document.querySelector('#sidebar') as HTMLDivElement

  start () {
    this.addEventListener()
  }

  private toggleSidebar () {
    // this.sidebar.classList.toggle('toggled')
    console.log('sidebar toggled')
  }

  private addEventListener () {
    // console.log(this.sidebarToggler)
    this.sidebarToggler.addEventListener('click', () => this.toggleSidebar())
  }
}()
