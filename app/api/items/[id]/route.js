import mongoConnect from "@/libs/mongodb";
import ItemModel from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function PUT(req) {

    try {
        const id = req.params.id;
        const {title , description} = req.body;

        await mongoConnect();
        await ItemModel.findByIdAndUpdate(id , {
            title , description
        })

        return NextResponse.json({message : 'Item Updated'}).status(200);

    } catch (error) {
        
    }
}


export async function GET(request) {

    try {
        const id = request.params.id;

        await mongoConnect();
        const item  = await ItemModel.findOne({_id: id});

        if(!item) {
            return NextResponse.json({error: 'Not found'}).status(404);
        }

        return NextResponse.json({message: 'success', item}).status(200);

    } catch (error) {
        console.log(error)
    }
}