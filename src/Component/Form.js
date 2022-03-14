import './Form.css'    

const Form = (props)=>{

    const valideteForm=()=>{
        // const name = document.[myForm][fname].value
        // console.log(fname);
    }

    return(      
        <div class="regForm">
        <form name="myForm" action="./object.html"  method="POST" onsubmit="return validateForm()">
            <h3 > Registration Form</h3>
            <div class="formDesign" id="fname">
                Name : <input type="text" name="name"/> <span class="formError"></span>
            </div>
            
            <div class="formDesign" id="email"> 
                Email : <input type="email" name="email"/> <span class="formError"></span>
            </div>
            
            <div class="formDesign" id="phone">
                Phone : <input type="phone" name="phone"/> <span class="formError"></span>
            </div>

            <div class="formDesign" id="pass">
                Password : <input type="password" name="password"/> <span class="formError"></span>
            </div>
            
            <div class="formDesign" id="cpass">
                Confirm Password : <input type="password" name="cpassword"/> <span class="formError"></span>
            </div>

            <div>
                <button class = "btnSub">Submit</button>
            </div>
        </form>
    </div>
    )
}
export default Form;