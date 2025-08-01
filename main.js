function detectStructure() {
  const output = document.getElementById('output');
  output.innerHTML = '🧠 正在识别结构中...（此处为模拟占位）';
}

function generateLayout() {
  const output = document.getElementById('output');
  output.innerHTML = '📐 正在生成平面图...（此处为模拟占位）';
}

document.getElementById('uploadInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const preview = document.getElementById('preview');
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = '<img src="' + e.target.result + '" alt="预览图">';
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = '';
  }
});
