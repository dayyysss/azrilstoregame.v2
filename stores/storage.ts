export const useStorageStore = defineStore("storage", {
  state: () => ({
  storage: {} as any,
  status: false,
  message: "",
  }),
  actions: {
  async uploadFile(pathname: string, file: any){
  const { storageUrl, apikey, secretKey } = useAppConfig();
  const {data, error} = await useFetch(`/object/products/${pathname}`, {
  baseURL: storageUrl,
  method: "POST",
  headers: {
  apikey: apikey,
  Authorization: `Bearer ${secretKey}`
  },
  body: file
  })
  
  if(error.value){
  this.status = false;
  this.message = "Upload Failed !!!";
  }else if(data){
  this.status = true;
  this.message = "Upload successfully";
  this.storage = data.value;
  }
  },
  }
  })