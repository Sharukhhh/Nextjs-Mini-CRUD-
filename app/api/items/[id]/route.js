import mongoConnect from "@/libs/mongodb";
import ItemModel from "@/models/itemModel";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {

    try {
        const {id} = params;
        console.log(id);
        const {newTitle , newDescription} = await req.json();

        console.log(newTitle , newDescription)

        await mongoConnect();
        await ItemModel.findByIdAndUpdate(id , {
            title , description
        })

        return NextResponse.json({message : 'Item Updated' }, {status: 200});

    } catch (error) {
        console.log(error);
    }
}


export async function GET(request , {params}) {

    try {
        const {id} = params;

        await mongoConnect();
        const item  = await ItemModel.findOne({_id: id});

        if(!item) {
            return NextResponse.json({error: 'Not found'} , {status: 404});
        }

        return NextResponse.json({item});

    } catch (error) {
        console.log(error)
    }
}