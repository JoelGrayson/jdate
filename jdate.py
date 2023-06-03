import datetime

def jdate():
    now=datetime.datetime.now()
    year=now.strftime("%y")
    month=str(int(now.strftime("%m"))) #str(int($_)) so no
    day=str(int(now.strftime("%d")))
    return f'{month}.{day}.{year}'

print(jdate())
