#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIProgressView (Exports)
-(id) jsinitWithProgressViewStyle: (UIProgressViewStyle) style 
{
	id resultVal__;
	resultVal__ = [[self initWithProgressViewStyle: style ] autorelease];
	return resultVal__;
}
-(id) jsinitWithFrame: (CGRect) frame 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIProgressView class], @protocol(UIProgressViewInstanceExports));
	class_addProtocol([UIProgressView class], @protocol(UIProgressViewClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIProgressViewStyleDefault"] = @0;
	context[@"UIProgressViewStyleBar"] = @1;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_UIKit_UIProgressView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
