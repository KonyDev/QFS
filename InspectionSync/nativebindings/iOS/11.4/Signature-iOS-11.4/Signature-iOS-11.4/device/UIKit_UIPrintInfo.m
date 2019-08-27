#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIPrintInfo (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIPrintInfo class], @protocol(UIPrintInfoInstanceExports));
	class_addProtocol([UIPrintInfo class], @protocol(UIPrintInfoClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIPrintInfoOutputGeneral"] = @0;
	context[@"UIPrintInfoOutputPhoto"] = @1;
	context[@"UIPrintInfoOutputGrayscale"] = @2;
	context[@"UIPrintInfoOutputPhotoGrayscale"] = @3;

	context[@"UIPrintInfoOrientationPortrait"] = @0;
	context[@"UIPrintInfoOrientationLandscape"] = @1;

	context[@"UIPrintInfoDuplexNone"] = @0;
	context[@"UIPrintInfoDuplexLongEdge"] = @1;
	context[@"UIPrintInfoDuplexShortEdge"] = @2;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIPrintInfo_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
