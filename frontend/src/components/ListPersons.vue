<template>
  <div class="persons">
      <div class="content">
        <button class="btn-new">Novo</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>CPF</th>
              <th>ENDEREÇO</th>
              <th>Opção</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JOELMIR ROGÉRIO CARVALHO</td>
              <td>000.000.000-00</td>
              <td>RUA BELA VISTA, 124</td>
              <td>
                <button class="btn-edit" >Editar</button>
                <button class="btn-delete">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .persons{
    width: 100%;
    height: 100%;
  }

  .content {
    margin-top: 10%;
    transform: translateY(-50%);
  }
  table{
    margin: 25px auto;
    border-collapse: collapse;
  }

  td, th{
    border: 1px solid;
    text-align: center;
    padding: 5px;
  }

  button{
    padding: 10px 15px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
  .btn-edit{
    margin-right: 5px;
    background-color: rgb(204, 204, 64);
  }

  .btn-delete{
    background-color: rgb(163, 69, 69);
  }

  .btn-new{
    background-color: rgb(58, 58, 148);
  }
</style>