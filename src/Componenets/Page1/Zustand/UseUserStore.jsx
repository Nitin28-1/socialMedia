import { create } from 'zustand'
import { doc, getDoc } from "firebase/firestore";

export const UseUserStore = create((set) => ({
  currentuser:null,
  isloading: true,
   
  fetchuserinfo: async (uid)=>
    {
        if(!uid) return set({currentuser:null,isloading:false});

        try
        {
            const docRef = doc(db, "user", uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                set({currentuser:docSnap.data(),isloading:false})
              
            } else {
                set({currentuser:null,isloading:false});
            }
        }
        catch(err)
        {
        return set({currentuser:null,isloading:false});
        }
    }

}))