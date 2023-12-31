// toggling input field
function togglingInputField(shape) {
    var shape 
    if (shape.style.display === "none") {
      shape.style.display = "flex"
    } else {
      shape.style.display = "none";
    }
  }




// Function which calculate area

function calculatingArea(shapevalue01,shapevalue02,shapename){
  if(shapename === 'triangle' || shapename === 'rhombus' || shapename === 'pentagon' || shapename === 'parallelogram'){
    const area = shapevalue01* shapevalue02 * 0.5
    return area.toFixed(2)
  }else if(shapename === 'elipse'){
    const area = 3.14 * shapevalue01 * shapevalue02
    return area.toFixed(2)
  }else{
    const area = shapevalue01 * shapevalue02
    return area.toFixed(2)
  }
  
}


// Function which create area as a list item

function ul(parameter, text){
  const ul = document.getElementById('list-container');
  const element = document.createElement('li');
  const textdocument = document.getElementById(text).innerText;
  element.innerHTML = `
  <p> ${textdocument} ${parameter}cm<sup>2</sup> <button class="btn-convert text-white font-bold mt-2 bg-blue-700 px-1 rounded-md">convert to m<sup>2</sup></button></p>
  `;
  ul.appendChild(element);
}

// Function that handle alert 

function showAlert(){
  const box = document.getElementById('alertbox')
  if (box.style.display === "none") {
    box.style.display = "block"
  }else{
    box.style.display = 'none'
  }
}



// Calculating Area By clicking Button
document.getElementById('calculate-triangle').addEventListener('click',function(){
  const value1 = document.getElementById('triangle-input-01').value
  const value2 = document.getElementById('triangle-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const triangleArea = calculatingArea(value1,value2,'triangle')
    document.getElementById('triangle-input-01').value = ''
    document.getElementById('triangle-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(triangleArea,'triangle')
  }
})
document.getElementById('calculate-rhombus').addEventListener('click',function(){
  const value1 = document.getElementById('rhombus-input-01').value
  const value2 = document.getElementById('rhombus-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const rhombusArea = calculatingArea(value1,value2,'rhombus')
    document.getElementById('rhombus-input-01').value = ''
    document.getElementById('rhombus-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(rhombusArea,'rhombus')
  }
})
document.getElementById('calculate-rectangle').addEventListener('click',function(){
  const value1 = document.getElementById(' rhombus-input-01').value
  const value2 = document.getElementById(' rhombus-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const  rhombusArea = calculatingArea(value1,value2,' rhombus')
    document.getElementById(' rhombus-input-01').value = ''
    document.getElementById(' rhombus-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul( rhombusArea,' rhombus')
  }
})
document.getElementById('calculate-rectangle').addEventListener('click',function(){
  const value1 = document.getElementById('rectangle-input-01').value
  const value2 = document.getElementById('rectangle-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const rectangleArea = calculatingArea(value1,value2,'rectangle')
    document.getElementById('rectangle-input-01').value = ''
    document.getElementById('rectangle-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(rectangleArea,'rectangle')
  }
})
document.getElementById('calculate-pentagon').addEventListener('click',function(){
  const value1 = document.getElementById('pentagon-input-01').value
  const value2 = document.getElementById('pentagon-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const pentagonArea = calculatingArea(value1,value2,'pentagon')
    document.getElementById('pentagon-input-01').value = ''
    document.getElementById('pentagon-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(pentagonArea,'pentagon')
  }
})
document.getElementById('calculate-parallelogram').addEventListener('click',function(){
  const value1 = document.getElementById('parallelogram-input-01').value
  const value2 = document.getElementById('parallelogram-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const parallelogramArea = calculatingArea(value1,value2,'parallelogram')
    document.getElementById('parallelogram-input-01').value = ''
    document.getElementById('parallelogram-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(parallelogramArea,'parallelogram')
  }
})
document.getElementById('calculate-elipse').addEventListener('click',function(){
  const value1 = document.getElementById('elipse-input-01').value
  const value2 = document.getElementById('elipse-input-02').value
  if(isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0){
    showAlert()
  }else{
    showAlert()
    const elipseArea = calculatingArea(value1,value2,'elipse')
    document.getElementById('elipse-input-01').value = ''
    document.getElementById('elipse-input-02').value = ''
    document.getElementById('list-container').addEventListener('click',function(event){
      event.target.parentNode.removeChild(event.target)
    })
    ul(elipseArea,'elipse')
  }
})
















// toggling
  document.getElementById('toggle-btn-triangle').addEventListener('click',function(){
    const triangleField = document.getElementById('triangle-input')
    togglingInputField(triangleField)
  })
  document.getElementById('toggle-btn-rhombus').addEventListener('click',function(){
    const rhombusField = document.getElementById('rhombus-input')
    togglingInputField(rhombusField)
  })
  document.getElementById('toggle-btn-rectangle').addEventListener('click',function(){
    const rectangleField = document.getElementById('rectangle-input')
    togglingInputField(rectangleField)
  })
  document.getElementById('toggle-btn-pentagon').addEventListener('click',function(){
    const pentagonField = document.getElementById('pentagon-input')
    togglingInputField(pentagonField)
  })
  document.getElementById('toggle-btn-parallelogram').addEventListener('click',function(){
    const parallelogramField = document.getElementById('parallelogram-input')
    togglingInputField(parallelogramField)
  })
  document.getElementById('toggle-btn-elipse').addEventListener('click',function(){
    const elipseField = document.getElementById('elipse-input')
    togglingInputField(elipseField)
  })





