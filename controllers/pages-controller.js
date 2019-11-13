 index = (req, res) => {
res.render('index');
}

 contact = (req, res) => {
    res.render('contact');
}

 about = (req, res) => {
    res.render('about');
}
 give = (req, res) => {
    res.render('give');
}
 resource = (req, res) => {
    res.render('resources');
}
 our_beliefs = (req, res) => {
    res.render('our-beliefs');
}  

const prayer = async (req, res)=> {
    res.render('submit_prayer');
}

const StudyNotes = async (req, res)=> {
    res.render('study_notes');
}

const ourPastor = ( req, res)=> {

    res.render('our-pastor');
}
const history = ( req, res)=> {

    res.render('history');
}

const leadership = (req, res) => {
    res.render('leadership');
}
const ourMinistries = (req, res) => {
    res.render('ministries');
}
const bibleStudy = (req, res) => {
    res.render('bible-study');
}

module.exports = {history,bibleStudy, index, StudyNotes, contact, about, give,
    ourPastor, resource, our_beliefs , prayer, leadership, ourMinistries}