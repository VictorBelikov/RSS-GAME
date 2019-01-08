const removeBtnAnswerListener = () => {
  const oldElement = document.getElementById('btnAnswer');
  const newElement = oldElement.cloneNode(true);
  oldElement.parentNode.replaceChild(newElement, oldElement);
};

export default removeBtnAnswerListener;
