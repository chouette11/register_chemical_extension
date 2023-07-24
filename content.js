document.querySelector('input[type="submit"].btn.btn-success[name="back"][value="「容器管理」へ戻る"]').addEventListener('click', async function() {
    let chemical = document.getElementById('product-english-name').value;
    console.log(chemical);
    const url = `https://us-central1-morimoto-lab.cloudfunctions.net/register_chemicals?chemical=${chemical}`
    fetch(url)
});