function solution(genres, plays) {
    const map = new Map();
    genres.forEach((v,id) => {
       if(map.get(v)){
          map.get(v).val.push({id, play: plays[id]})
          map.set(v, {...map.get(v), total: map.get(v).total + plays[id]})
       }else{
          map.set(v, {val: [{id, play: plays[id]}], total: plays[id]})
       }
    });
 
    const mapToArray = [...map]
    mapToArray.sort((a,b)=>b[1].total - a[1].total)
    mapToArray.forEach((v)=>v[1].val.sort((a,b)=>b.play - a.play))
    const res = []
    mapToArray.forEach((v)=>{
       v[1].val.forEach((v2, i)=>{
          if(i < 2) res.push(v2.id)
       })
    })
    return res
 }
 
 console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]