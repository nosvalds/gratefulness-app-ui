import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? 
    "TBD" // production url
    : "http://gratefulness.test/api/thoughts", // url from vagrant/homestead virtual machine for development
  headers: {
    Accept: "application/json",
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZDQ0YWE3YzUwNDUxYjYwM2Q0ZmFiMGJmNjQzOWFkNTI4ODMzMDc0NzYxMWY1YjdkM2M4YmY0ZDhlNzg1ZjNlOTQ0MjU5Njg1OWYzM2Y1NjYiLCJpYXQiOjE1OTc4NDYyMzQsIm5iZiI6MTU5Nzg0NjIzNCwiZXhwIjoxNjI5MzgyMjM0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eHzi9emjgXaS36Xb-F_YVw5awJwU25w532bqZ-jM_mctAJxW--CoNVAN2IIGQBrqZa2dTGyLRMZ6G959WfbjXiQUzMkF5L8Cf0ZXYqTKC-U3gce5KVi33jIWQCC1UE3vKIkBpkNKdftdNoOFzoXZd6aieHFKYdaVkxd7iniI9Wuvsd_6tP8Esxclmt9lHixmD_6vMrJ1IskjYVwJhM7etKVn7f1FgFvmvFX8BAlSaXl5-99hFfrWacHS6oQ0xmjCqqdinrX5ungKa_MjGOKoXJWI0W038IvfTMLAEQgdPU2mtnYgwZ-5XcbRMEI3TfaNHQnopNDZW_HQ8StJuLK_maXzUJp5-sMYMPkTiJ72UmUHsmHdYfD92G3XMHOi0KlROCy5RgOkBkLsj7jBLs-PsNKt9veQiZpn8FqGVA71JaHt1kVmjAHp7mDwqX53zkVfs1X66xZrt_OtDaNqKexZhYo1ObNWD3fJ91NiQLq_O8FgEHwBiA56Ukw7XLuyqO92Tuxp-N7lafTvV8DUfl_PT-YHGBwDThdrYIxV4SrVC-mPN_mlBhrteKHybaEfydcNLtXJE50reTtnc-IAyBy6fGIZGe_ESHYz_BBLBYkYsx1Q8IqfjcaTQGs_z8-_blQnzWc59zla1wHiVYbUs970wVZTad_RRYUJtIBGDMsJjGA"
  }
})