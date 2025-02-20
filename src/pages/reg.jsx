import '../css/regStyle.css'

export const RegPage = (props)=>{

    return <div class="main">
        <div class="formMainDiv">
            <form method="post" class="form">
                    <label class="mainLabel">Регистрация</label>
                    <input type="text" name="FirstName" class="inputData" placeholder="Имя:" required />
                    <input type="text" name="LastName" class="inputData" placeholder="Фамилия:" required />
                    <input type="text" name="MiddleName" class="inputData" placeholder="Отчество:" required />
                    <input type="tel" name="Tel" class="inputData" placeholder="Телефон:" required />
                    <input type="email" name="Email" class="inputData" placeholder="Почта:" required />
                    <input type="password" name="password1" class="inputData" placeholder="Пароль:" required />
                    <input type="password" name="password2" class="inputData" placeholder="Повторите пароль:" required />
                    <label class="persData"><input type="checkbox" required /> Я даю согласие на обработку персональных данных</label>
                    <button class="buttonEnter">Зарегистрироваться</button>
            </form>
            <button class="buttonLink" id="awt">Авторизация</button>
            <button class="buttonLink" id="ind">Главная</button>	
        </div>
    </div>        
      
}