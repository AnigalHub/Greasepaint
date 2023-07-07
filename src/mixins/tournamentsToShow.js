import information from '../../public/documents/information.json';
export const tournamentsToShow = {
    data(){
        return{
            today: new Date(),
            Tournaments:information.Tournaments,
        }
    },
    computed:{
        tournamentsToShow(){
            let tournaments = [];

            this.Tournaments.forEach((tournament) =>{
                let date = (tournament.date).split(" ");
                let day = date[0];
                let year = date[2];
                let month = this.SearchForTheNumberOfTheMonth(date[1]);

                const dateTournament = new Date(Number(year),month,Number( day));

                let dateDifference = this.today - dateTournament;

                const ONE_DAY_IN_MS = 86400000;
                if ( dateDifference < ONE_DAY_IN_MS ){
                    tournaments.push(tournament)
                }
            })
            return tournaments;
        },
    },
    methods:{
        SearchForTheNumberOfTheMonth: function (monthStr) {
            const months = {
                января: 0,
                февраля: 1,
                марта: 2,
                апреля: 3,
                мая: 4,
                июня: 5,
                июля: 6,
                августа: 7,
                сентября: 8,
                октября: 9,
                ноября: 10,
                декабря: 11
            }
            return months[monthStr];
        }
    }
}
