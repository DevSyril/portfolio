import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const {subject, text, html } = req.body;

    try {
        await sendgrid.send({
            from: 'kokousyril@gmail.com',
            to : 'devsyril@gmail.com',
            subject,
            text,
            html,
        });

        res.status(200).json({ message: 'Email envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email.', error });
    }
}
