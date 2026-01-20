/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const campuses = [
    { id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"] },
    { id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"] },
    { id: 3, code: "SEA", name: "Seattle Center", city: "Seattle", open: false, programs: ["Continuing Ed"] },
    { id: 4, code: "TAC", name: "Tacoma Site", city: "Tacoma", open: true, programs: ["Trades", "IT"] },
    { id: 5, code: "REN", name: "Renton Annex", city: "Renton", open: false, programs: ["ESL", "GED"] }
];

export const home = (req, res) => {
    res.json({
        campuses: campuses
    });
    
}


export const campusesAboutInfo = (req, res) => res.status(200).json({
        message: "server routes",
        routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search="]
    })


export const getAllCampuses = (req, res) => res.status(200).json({
        campuses: campuses
    })

export const getCampusById = (req, res) => {
    const { id } = req.params;

    console.log(id);

    const campus = campuses.find(el => el.id ===Number(id))

    if (campus) {
        return res.status(200).json(campus)
            
    } else {
        return res.status(404).json({
            message: "Campus not found"
        })
    }
}


export const searchCampuses = (req, res) => {
    const { city, open, program } = req.query; 

    let results = campuses;

    if(program){
        results = results.filter(el => el.programs.includes(program));
    }

    if(open){
        results = results.filter(el => String(el.open) === open);
    }

    if(city){
        results = results.filter(el => el.city === city);
    }

     

    
    return res.status(200).json({
        results: results
    })
}
