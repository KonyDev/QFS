#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIImageView_symbols(JSContext*);
@protocol UIImageViewInstanceExports<JSExport>
@property (getter=isHighlighted,nonatomic) BOOL highlighted;
@property (copy,nonatomic) NSArray * highlightedAnimationImages;
@property (nonatomic,strong) UIImage * image;
@property (copy,nonatomic) NSArray * animationImages;
@property (getter=isUserInteractionEnabled,nonatomic) BOOL userInteractionEnabled;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic,strong) UIImage * highlightedImage;
@property (nonatomic) NSTimeInterval animationDuration;
@property (getter=isAnimating,readonly,nonatomic) BOOL animating;
@property (nonatomic) NSInteger animationRepeatCount;
-(void) startAnimating;
JSExportAs(initWithImageHighlightedImage,
-(id) jsinitWithImage: (UIImage *) image highlightedImage: (UIImage *) highlightedImage );
-(void) stopAnimating;
JSExportAs(initWithImage,
-(id) jsinitWithImage: (UIImage *) image );
@end
@protocol UIImageViewClassExports<JSExport>
@end
#pragma clang diagnostic pop