export default function RefreshPage() {
    setTimeout(()=>{
        window.location.assign("/");
        window.location.reload(false);
    }, 1);
  }