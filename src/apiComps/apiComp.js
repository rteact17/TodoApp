import React from 'react';

class ApiComp extends React.Component{
constructor(props){
    super(props);
    this.state={users:[]}
}
callAPI = ()=>{
    let resp  =  fetch('https://reqres.in/api/users?page=2');
    resp.then((data) => {return data.json()}).then((response)=>{
        console.log(response.data);        
        this.setState({users:response.data})
    }).catch((err)=>{
        console.log(err);
    });        
}
 createRec = () =>{
    fetch('https://reqres.in/api/users', {
        "method":"POST",
        "body":JSON.stringify({name: "morpheus", job: "leader"}),
    }).then((data1) => (data1.json())).then((aa)=>{console.log(aa)}).catch(()=>{});
 }
render(){
    return <>
    <p>API Component</p>
    <button onClick={this.createRec}>Create Record</button>
    <button onClick={this.callAPI}>Call API</button>
    <ul>
        {this.state.users.map((user)=>{
            return <li>
                Name : <span>{user.first_name + ' '+ user.last_name}</span><br></br>
                Email: <span>{user.email}</span>
            </li>
        })}
    </ul>
    </>
}
}

export default ApiComp;