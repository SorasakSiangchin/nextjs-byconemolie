"use client"

type User = {
    username : string ,
    password : string
};

const Hey1 = () => {
    const tem1 = 0;
    const tem2 = "arm";
    const tem3 = true;
    const tem5 = { username : "admin" , password : "123" };

    const tem6:number = 0;
    const tem7:string = "sorasak siangchin";
    const tem8:boolean = true;
    const tem9:any = { username : "admin" , password : "123" };

    const tem10 : User = {
        username : "admin" ,
        password : "123"
    };

    const method1 = () => {
        alert("hello world !");
    };

    return (
    <div>
        <ul>
            <li>
                - {JSON.stringify(tem10)}
            </li>
            <li>
                <button onClick={method1}>
                    ClickMe
                </button>
            </li>
        </ul>
    </div>
    );
};

export default Hey1;