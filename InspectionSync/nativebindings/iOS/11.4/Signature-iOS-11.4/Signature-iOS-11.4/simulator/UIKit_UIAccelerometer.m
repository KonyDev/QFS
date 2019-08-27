#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([UIAcceleration class], @protocol(UIAccelerationInstanceExports));
	class_addProtocol([UIAcceleration class], @protocol(UIAccelerationClassExports));
	class_addProtocol([UIAccelerometer class], @protocol(UIAccelerometerInstanceExports));
	class_addProtocol([UIAccelerometer class], @protocol(UIAccelerometerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void UIKit_UIAccelerometerProtocols()
{
	(void)@protocol(UIAccelerometerDelegate);
}
void load_UIKit_UIAccelerometer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
