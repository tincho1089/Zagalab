export const Routes = {
    HOME: {
        path: "/",
        name: "Home"
    },
    STEPPER: {
        path: "/stepper",
        name: "stepper"
    },
    STARWARS: {
        path: "/StarWars",
        name: "starwars"
    }
}

export interface Route {
    path: string;
    name: string;
}