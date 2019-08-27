#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIActivity_symbols(JSContext*);
@protocol UIActivityInstanceExports<JSExport>
@property (readonly,nonatomic) UIImage * activityImage;
@property (readonly,nonatomic) UIActivityType activityType;
@property (readonly,nonatomic) UIViewController * activityViewController;
@property (readonly,nonatomic) NSString * activityTitle;
-(void) performActivity;
-(void) prepareWithActivityItems: (NSArray *) activityItems ;
-(BOOL) canPerformWithActivityItems: (NSArray *) activityItems ;
-(void) activityDidFinish: (BOOL) completed ;
@end
@protocol UIActivityClassExports<JSExport>
+(UIActivityCategory) activityCategory;
@end
#pragma clang diagnostic pop