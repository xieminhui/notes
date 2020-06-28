var tmpl = city => {
    return `
    <table>
    ${city.map(value =>{
        return `
            <tr> 
                <td>${value.pro}</td>
                <td>${value.cityname}</td>
            </tr>
        `
    }).join('')}	
    </table>`
};
var citys = [
    {
        pro: '广东省',
        cityname: '广州'
    },
    {
        pro: '湖北省',
        cityname: '武汉'
    }
];
console.log(tmpl(citys));