// Enclosure to prevent cross-talk
(function() {
    // Gather constants
    const container = document.querySelector(".circle-container");
    const textboxes = document.querySelectorAll('.textbox');
    const nextbuttons = document.querySelectorAll('button.next-button');
     const prevbuttons = document.querySelectorAll('button.prev-button');
       const dots = document.querySelectorAll('.div2');
        const labels = document.querySelectorAll('.labels');
    
      // Functions  
    function removeClassByPrefix(node, prefix) {
      var regx = new RegExp("\\b" + prefix + "[^ ]*[ ]?\\b", "g");
      node.className = node.className.replace(regx, "");
      return node;
    }
  
    function handler(e) {
      // get the number from either the circle click or the next button
      var num =  (this.dataset.img || e.target.dataset.next) ? this.dataset.img || e.target.dataset.next : e.target.dataset.prev;
  
      //changes image in circle
      removeClassByPrefix(container, "image-");
      container.classList.add("image-" + num);
  
      //swap displayed textbox
      for (var i=0; i<textboxes.length; i++) {
        document.querySelector('.textbox[data-textbox="'+i+'"]').classList.remove('active');
        document.querySelector('.circle-container .labels[data-value="'+i+'"]').classList.remove('label-active');
      }
      document.querySelector('.textbox[data-textbox="'+num+'"]').classList.add('active');
      document.querySelector('.circle-container .labels[data-value="'+num+'"]').classList.add('label-active');
    }
  
  
    // Initiate
    
    window.addEventListener('load', function() {
          //click events for dots and labels
       for (var i=0; i< dots.length; i++) {
         document.querySelector('.circle-container .labels[data-value="0"]').classList.add('label-active');
        
        dots[i].addEventListener('click', handler);
         dots[i].addEventListener('touch', handler);
        labels[i].addEventListener('click', handler);
         labels[i].addEventListener('touch', handler);
      }
  
      // Next Button Events 
      for (var i=0; i<nextbuttons.length; i++) {
        nextbuttons[i].addEventListener('click', handler);
        nextbuttons[i].addEventListener('touch', handler);
      }
      
        // Prev Button Events 
      for (var i=0; i<prevbuttons.length; i++) {
        prevbuttons[i].addEventListener('click', handler);
        prevbuttons[i].addEventListener('touch', handler);
      }
    });
  })();