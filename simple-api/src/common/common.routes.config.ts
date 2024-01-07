import express from 'express';

export class ConfigRoutes {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app
        this.name = name
    }

    getName(): string {
        return this.name
    }

}