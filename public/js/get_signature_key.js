

var widget,
    input = document.getElementById('request_signature_key');

document.getElementById('run-click').addEventListener("click", function() {
  
    var request_signature_key = input.value;
  
    if(widget) { widget.unmount(); }
  
    widget = new Clicksign(request_signature_key);
  
    widget.endpoint = 'https://sandbox.clicksign.com';
    widget.origin = 'https://acordofechado.com.br';
    widget.mount('container');
  
    widget.on('loaded', function(ev) { console.log('loaded!'); });
    widget.on('signed', function(ev) { console.log('signed!'); });
    widget.on('resized', function(height) {
      console.log('resized!');
      document.getElementById('container').style.height = height+'px';
    });
})
