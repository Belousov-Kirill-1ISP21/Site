import '../css/awtStyle.css'

export const AwtPage = (props)=>{

    return <div class="main">
        <div class="formMainDiv">
            <div class="form">
                <form method="post" action="../php/awt.php" target="formDestination">
                        <label class="mainLabel">Вход</label>
                        <input type="email" name="email" class="inputData" placeholder="Почта:" required/>
                        <input type="password" name="password" class="inputData" placeholder="Пароль:" required/>
                        <button class="buttonEnter">Войти</button>
                </form>
                <button class="buttonLink" id="reg" onclick="document.location='reg.php'">Регистрация</button>
                <button class="buttonLink" id="ind" onclick="document.location='../index.php'">Главная</button>
            </div>
        </div>
    </div>        
      
}