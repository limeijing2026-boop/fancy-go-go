const toast=document.getElementById('toast');let toastTimer;
function toastMsg(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));btn.classList.add('active');toastMsg('已筛选「'+btn.textContent+'」')}));
document.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>btn.classList.toggle('active')));
