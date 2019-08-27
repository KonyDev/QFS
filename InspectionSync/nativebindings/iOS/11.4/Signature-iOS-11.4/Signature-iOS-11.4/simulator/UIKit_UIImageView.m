#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIImageView (Exports)
-(id) jsinitWithImage: (UIImage *) image highlightedImage: (UIImage *) highlightedImage 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: image highlightedImage: highlightedImage ] autorelease];
	return resultVal__;
}
-(id) jsinitWithImage: (UIImage *) image 
{
	id resultVal__;
	resultVal__ = [[self initWithImage: image ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIImageView class], @protocol(UIImageViewInstanceExports));
	class_addProtocol([UIImageView class], @protocol(UIImageViewClassExports));
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
void load_UIKit_UIImageView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
