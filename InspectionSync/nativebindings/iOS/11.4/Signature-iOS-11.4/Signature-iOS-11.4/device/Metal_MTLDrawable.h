#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_Metal_MTLDrawable_symbols(JSContext*);
@protocol MTLDrawableInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) NSUInteger drawableID;
@property (readonly,nonatomic) CFTimeInterval presentedTime;
-(void) presentAtTime: (CFTimeInterval) presentationTime ;
-(void) presentAfterMinimumDuration: (CFTimeInterval) duration ;
JSExportAs(addPresentedHandler,
-(void) jsaddPresentedHandler: (JSValue *) block );
-(void) present;
@end
@protocol MTLDrawableClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop