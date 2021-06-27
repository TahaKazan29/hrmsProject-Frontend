export function checkStatus(statu) {
    if(statu === "WAITING_APPROVAL"){
        return "Onay Bekliyor";
    }
    else if(statu === "PROFILE_WAITING_APPROVAL"){
        return "Onay Bekliyor";
    }
    else if(statu === "ACTIVE"){
        return "Aktif";
    }
    else if(statu === "PASSIVE"){
        return "Pasif";
    }
    else if(statu === "REJECTED"){
        return "Reddedildi";
    }
    else if(statu === "EXPIRED"){
        return "Süresi Doldu";
    }
}

export function checkStatusColor(statu){
    if(statu === "WAITING_APPROVAL"){
        return "text-orange-500";
    }
    else if(statu === "PROFILE_WAITING_APPROVAL"){
        return "text-orange-500";
    }
    else if(statu === "ACTIVE"){
        return "text-emerald-500";
    }
    else if(statu === "PASSIVE"){
        return "text-pink-400";
    }
    else if(statu === "REJECTED"){
        return "text-red-500";
    }
    else if(statu === "EXPIRED"){
        return "text-purple-500";
    }
}


