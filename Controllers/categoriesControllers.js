import User from '../Model/categoriesModel.js'
import mongoose from 'mongoose'

export var getCategories = async (req, res) => {
    try {

        const categories = await Categorie.find();
        res.status(200).json(categories);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getCategorie = async (req, res) => {
    try
    {
        const upCategorie = await Categorie.findById(req.params.id);
        res.status(201).json(upCategorie);
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}
//wesh
export const createCategorie = async (req, res) => {
    const body = req.body;
    const newCategorie = new User(body);

    try {

        await newCategorie.save();

        res.status(201).json(newCategorie);
        
    } catch (error) {

        res.status(404).json({ message: error.message});
        
    }
}


export const deleteCategorie = async (req, res) => {
    try
    {
        await Categorie.findByIdAndDelete(req.params.id);
        res.status(201).json(req.params.id+' : supprimer');
        console.log(req.params.id+' : supprimer')
    }catch (error) 
    {
        res.status(404).json({ message: error.message});
    }
}

export const updateCategorie = async (req, res) => {

    await Categorie.findByIdAndUpdate(req.params.id, {name: req.body.name});

    res.status(201).json(req.params.id+' : update');

    console.log(req.params.id+' : update')

    res.json(updateCategorie);
}