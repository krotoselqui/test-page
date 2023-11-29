document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const resizeHandle = document.getElementById('resize-handle');

    resizeHandle.addEventListener('mousedown', startResize, false);
    resizeHandle.addEventListener('touchstart', startResize, false);

    function startResize(e) {
        e.preventDefault();
        window.addEventListener('mousemove', resize, false);
        window.addEventListener('mouseup', stopResize, false);
        window.addEventListener('touchmove', resize, false);
        window.addEventListener('touchend', stopResize, false);
    }

    function resize(e) {
        let clientX;
        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
        sidebar.style.width = clientX + 'px';
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize, false);
        window.removeEventListener('mouseup', stopResize, false);
        window.removeEventListener('touchmove', resize, false);
        window.removeEventListener('touchend', stopResize, false);
    }
});
