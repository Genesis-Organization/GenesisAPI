import express from "express";
const app = express();
const port = 21370

app.get( "/", ( req, res ) => {
    res.send( 'body' );
} );

app.use(express.static('assets'))

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
