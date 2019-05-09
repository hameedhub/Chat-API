class Message {
    static SendMessage(req, res){
        console.log(req.userData);
        const post = {
            receiver: req.params.email,
            message: req.body.message
        }
        return res.status(201).json({

        })
    }
    static ChatMessage(req, res){
        return res.status(200).json({

        })
    }
    static ChatMember(req, res){
        return res.status(200).json({

        })
    }
}