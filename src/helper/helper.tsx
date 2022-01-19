export const getSwapApiData=async(reqType:string='',id:string='')=>{
    const baseApiUrl=  `https://swapi.dev/api`;
    let apiUrl='/';
    if(reqType){
        apiUrl=`${apiUrl}${reqType}`
        if(id){
            apiUrl=`${apiUrl}/${id}`
        }
    }
const response=await fetch(`${baseApiUrl}${apiUrl}`)
const data=await response.json()
return data;
}

export const peopleDisplayField=['name','height','mass','hair_color','skin_color','gender','birth_year','terrain','population','title','producer','release_date','director']