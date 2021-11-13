class Profile {
  constructor(
    Name = "Hady Ahmed Mohamed",
    Bio = "Young Man Drifting to programming ",
    Imgsrc = "https://gomycodewebsite.blob.core.windows.net/website/img/2_lines_avatar_400pxl_x_400pxl_1325c04099.jpg",
    Profession = "Computational Fluid Dyamics Engineer/Software Engineer ",
    Shows = true
  ) {
    this.Name = Name;
    this.Bio = Bio;
    this.Imgsrc = Imgsrc;
    this.Profession = Profession;
    this.Shows = Shows;
  }
}

export default Profile;
