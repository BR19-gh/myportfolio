import express from "express";


const logger = (req: express.Request, res: express.Response , next: Function): void => {
    
    console.log(`${req.url} was visited`);
    next();
};

export default logger;