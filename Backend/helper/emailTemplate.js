function emailTemplate(token) {
    return `<div style="padding-bottom: 10px;"><h2 style="font-family:'DM sans',sans-serif;font-weight:600;color:#000;}">ECOMMERCE</h2>
    <p style="font-family:'DM sans',sans-serif;font-weight:400;color:#000">Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Minus, blanditiis explicabo a quasi sint facilis quaerat quidem 
     laboriosam ipsum atque nihil inventore voluptatibus assumenda tenetur, cum, aliquam quos laborum
      laudantium!</p>
      <p></p><a href="http://localhost:8000/api/v1/authentication/verification/${token}"style="background-color:#0ff;border-radius:8px;text-decoration:none;
      padding:6px 10px;font-family:'DM sans',sans-serif;font-weight:500">Verify your Email</a></div>`
}

module.exports = emailTemplate;