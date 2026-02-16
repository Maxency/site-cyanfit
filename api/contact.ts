const nodemailer = require('nodemailer');

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => {
    json: (payload: unknown) => void;
  };
};

type ContactBody = {
  nome?: unknown;
  email?: unknown;
  mensagem?: unknown;
};

const MAX_FIELD_LENGTH = 1000;

function toSafeString(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim();
}

function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim();
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

module.exports = async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Metodo nao permitido. Use POST.' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.error('Missing EMAIL_USER or EMAIL_PASS env vars.');
    return res.status(500).json({ message: 'Erro ao enviar mensagem.' });
  }

  try {
    const body = (req.body ?? {}) as ContactBody;

    const nome = toSafeString(body.nome).slice(0, MAX_FIELD_LENGTH);
    const email = toSafeString(body.email).slice(0, MAX_FIELD_LENGTH);
    const mensagem = toSafeString(body.mensagem).slice(0, MAX_FIELD_LENGTH);

    if (!nome || !email || !mensagem || !isValidEmail(email)) {
      return res.status(500).json({ message: 'Dados invalidos para envio.' });
    }

    const safeNome = sanitizeHeaderValue(nome);
    const safeEmail = sanitizeHeaderValue(email);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Site Alenya" <${emailUser}>`,
      to: emailUser,
      replyTo: safeEmail,
      subject: `Novo contato do site - ${safeNome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`,
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    const isProd = process.env.NODE_ENV === 'production';
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido ao enviar mensagem.';

    return res.status(500).json({
      message: isProd ? 'Erro ao enviar mensagem.' : `Erro ao enviar mensagem. Detalhe: ${errorMessage}`,
    });
  }
};
