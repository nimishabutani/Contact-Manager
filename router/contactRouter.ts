import express, { Router, Request, Response, response } from 'express';
import { body, validationResult } from 'express-validator';
import { request } from 'http';
import * as contactController from '../controllers/contactController';



const contactRouter: Router = Router();


// @usage : to get all contacts
// @method : GET
// @params : no-params
// @url : http://localhost:9000/contacts

contactRouter.get("/", async (request: Request, response: Response) => {
    await contactController.getAllContacts(request, response);

});



/**
@usage : get a contact
@method : GET
@params : no-params
@url : http://localhost:9000/contacts/:contactId
 */
contactRouter.get("/:contactId", async (request: Request, response: Response) => {
    await contactController.getContacts(request, response);

});



/**
@usage : create a contact
@method : POST
@params : name, imageUrl, email, mobile, company, title, groupId
@url : http://localhost:9000/contacts/
 */
contactRouter.post("/", [
    body('name').not().isEmpty().withMessage('name is required'),
    body('imageUrl').not().isEmpty().withMessage('imageUrl is required'),
    body('email').not().isEmpty().withMessage('email is required'),
    body('mobile').not().isEmpty().withMessage('mobile is required'),
    body('company').not().isEmpty().withMessage('company is required'),
    body('title').not().isEmpty().withMessage('title is required'),
    body('groupId').not().isEmpty().withMessage('groupId is required'),

], async (request: Request, response: Response) => {
    await contactController.createcontacts(request, response);

});



/**
@usage : Update a contact
@method : PUT
@params : name, imageUrl, email, mobile, company, title, groupId
@url : http://localhost:9000/contacts/:contactId
 */
contactRouter.put("/:contactId", [
    body('name').not().isEmpty().withMessage('name is required'),
    body('imageUrl').not().isEmpty().withMessage('imageUrl is required'),
    body('email').not().isEmpty().withMessage('email is required'),
    body('mobile').not().isEmpty().withMessage('mobile is required'),
    body('company').not().isEmpty().withMessage('company is required'),
    body('title').not().isEmpty().withMessage('title is required'),
    body('groupId').not().isEmpty().withMessage('groupId is required'),
], async (request: Request, response: Response) => {
    await contactController.updateContacts(request, response);
});




/**
@usage : Delete a contact
@method : DELETE
@params : no-params
@url : http://localhost:9000/contacts/:contactId
 */
contactRouter.delete("/:contactId", async (request: Request, response: Response) => {
    await contactController.deleteContacts(request, response);

});

export default contactRouter;