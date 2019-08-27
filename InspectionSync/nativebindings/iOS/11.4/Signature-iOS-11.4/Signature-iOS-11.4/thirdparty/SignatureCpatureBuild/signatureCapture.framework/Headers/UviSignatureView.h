//
//  signatureCapture.h
//  signatureCapture
//
//  Created by Vadithya Narayana on 11/07/18.
//  Copyright © 2018 Vadithya Narayana. All rights reserved.
//

#import <UIKit/UIKit.h>

// Protocol definition starts here
@protocol UviSignatureViewDelegate <NSObject>
@required
- (void)shakeCompleted;
@end

@interface UviSignatureView : UIView {
    CGPoint previousPoint;
    UIBezierPath *signPath;
    NSArray *backgroundLines;
}

@property (nonatomic, strong, nonnull) NSMutableArray *pathArray;
@property (nonatomic, strong, nullable) UIColor *lineColor;
@property (nonatomic, strong, nullable) UIColor *backgroundColor;
@property (nonatomic) CGFloat lineWidth;
//@property (nonatomic, readonly) BOOL signatureExists;


-(BOOL)signatureExists;
- (NSString*)captureSignature;
- (UIImage*_Nullable)signatureImage:(CGPoint)position text:(NSString*_Nullable)text;
- (void)erase;
- (void)drawRect:(CGRect)rect;
- (UIColor *)changeLineColor:(NSString*)Lcolor;
- (UIColor *)changebackgroundColor:(NSString*)Lcolor;



@end
