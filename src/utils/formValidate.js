 const formValidate=(e)=>
 new Promise(async (res,rej)=>{
    try {
        await e.validateFields();
        res()
      } catch (errorInfo) {
          console.log(errorInfo)
      }
})
export default formValidate